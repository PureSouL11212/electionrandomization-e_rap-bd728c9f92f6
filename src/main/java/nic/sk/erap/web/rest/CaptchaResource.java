/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nic.sk.erap.web.rest;

import io.micrometer.core.annotation.Timed;
import java.awt.Color;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Graphics2D;
import java.awt.geom.AffineTransform;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.net.URISyntaxException;
import java.util.Base64;
import javax.imageio.ImageIO;
import nic.sk.erap.domain.Captcha;
import nic.sk.erap.repository.CaptchaRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/* Created on Fri Dec 22 2023, @Author Kuldeep, NIC Sikkim  */

@RestController
@RequestMapping("/api")
public class CaptchaResource {

    private final Logger log = LoggerFactory.getLogger(CaptchaResource.class);

    @Autowired
    public CaptchaRepository captchaRepository;

    @GetMapping("/getCaptcha")
    @Timed
    public Captcha getCaptchaImage() {
        try {
            // Color backgroundColor = new Color(119, 212, 211);
            Color backgroundColor = new Color(108,190,199);
            Color borderColor = new Color(160,71,71);;
            Color textColor = Color.black;
            Color circleColor = new Color(160,71,71);
            Font textFont = new Font("Verdana", Font.BOLD, 20);
            int charsToPrint = 6;
            int width = 160;
            int height = 50;
            int circlesToDraw = 25;
            float horizMargin = 10.0f;
            double rotationRange = 0.7;
            BufferedImage bufferedImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
            Graphics2D g = (Graphics2D) bufferedImage.getGraphics();
            g.setColor(backgroundColor);
            g.fillRect(0, 0, width, height);
            // lets make some noisey circles
            g.setColor(circleColor);
            for (int i = 0; i < circlesToDraw; i++) {
                int L = (int) ((Math.random() * height) / 2.0);
                int X = (int) (Math.random() * width - L);
                int Y = (int) (Math.random() * height - L);
                g.draw3DRect(X, Y, L * 2, L * 2, true);
            }
            g.setColor(textColor);
            g.setFont(textFont);
            FontMetrics fontMetrics = g.getFontMetrics();
            int maxAdvance = fontMetrics.getMaxAdvance();
            int fontHeight = fontMetrics.getHeight();

            String elegibleChars = "ABCDEFGHJKLMNPQRSTUVWXY23456789";
            char[] chars = elegibleChars.toCharArray();
            float spaceForLetters = -horizMargin * 2 + width;
            float spacePerChar = spaceForLetters / (charsToPrint - 1.0f);
            StringBuilder finalString = new StringBuilder();
            for (int i = 0; i < charsToPrint; i++) {
                double randomValue = Math.random();
                int randomIndex = (int) Math.round(randomValue * (chars.length - 1));
                char characterToShow = chars[randomIndex];
                finalString.append(characterToShow);

                // this is a separate canvas used for the character so that
                // we can rotate it independently
                int charWidth = fontMetrics.charWidth(characterToShow);
                int charDim = Math.max(maxAdvance, fontHeight);
                int halfCharDim = (int) (charDim / 2);
                BufferedImage charImage = new BufferedImage(charDim, charDim, BufferedImage.TYPE_INT_ARGB);
                Graphics2D charGraphics = charImage.createGraphics();
                charGraphics.translate(halfCharDim, halfCharDim);
                double angle = (Math.random() - 0.5) * rotationRange;
                charGraphics.transform(AffineTransform.getRotateInstance(angle));
                charGraphics.translate(-halfCharDim, -halfCharDim);
                charGraphics.setColor(textColor);
                charGraphics.setFont(textFont);
                int charX = (int) (0.5 * charDim - 0.5 * charWidth);
                charGraphics.drawString(
                    "" + characterToShow,
                    charX,
                    (int) ((charDim - fontMetrics.getAscent()) / 2 + fontMetrics.getAscent())
                );
                float x = horizMargin + spacePerChar * (i) - charDim / 2.0f;
                int y = (int) ((height - charDim) / 2);
                g.drawImage(charImage, (int) x, y, charDim, charDim, null, null);
                charGraphics.dispose();
            }
            g.setColor(borderColor);
            g.drawRect(0, 0, width - 1, height - 1);
            g.dispose();
            Captcha captcha = new Captcha();
            captcha.setKey(finalString.toString());
            captcha = captchaRepository.save(captcha);
            byte[] imageInByte = null;
            try {
                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                ImageIO.write(bufferedImage, "jpg", baos);
                baos.flush();
                imageInByte = baos.toByteArray();
                captcha.setKey(Base64.getEncoder().encodeToString(imageInByte));
                baos.close();
            } catch (Exception ex) {}

            return captcha;
        } catch (Exception ioe) {
            throw new RuntimeException("Unable to build image", ioe);
        }
    }

    @PostMapping("/validateCaptcha")
    @Timed
    public Captcha validateCaptcha(@RequestBody Captcha captchaRecieved) throws URISyntaxException {
        Captcha captcha = captchaRepository.findOneByIdAndKey(captchaRecieved.getId(), captchaRecieved.getKey());
        if (captcha != null) {
            captchaRepository.delete(captcha);
            return captcha;
        } else {
            captchaRecieved.setKey("#######");
            return captchaRecieved;
        }
    }

    @PostMapping("/deleteCaptcha")
    @Timed
    public boolean deleteCaptcha(@RequestBody Captcha captchaRecieved) throws URISyntaxException {
        captchaRepository.delete(captchaRecieved);
        return false;
    }

    @GetMapping("/refreshCaptcha")
    @Timed
    public Captcha refreshCaptcha(@RequestParam Long id) {
        if (captchaRepository.existsById(id)) {
            this.captchaRepository.deleteById(id);
        }
        return getCaptchaImage();
    }
}
