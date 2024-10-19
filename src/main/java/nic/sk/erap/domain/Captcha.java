/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nic.sk.erap.domain;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import java.io.Serializable;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author kuldeep
 */
@Entity
@Table(name = "tbl_captcha")
public class Captcha implements Serializable {

    @Id
    @SequenceGenerator(name = "tbl_captcha_id_seq", sequenceName = "tbl_captcha_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "tbl_captcha_id_seq", strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Long id;

    @Column(name = "key")
    String key;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    @Override
    public String toString() {
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String json = null;
        try {
            json = ow.writeValueAsString(this);
        } catch (JsonProcessingException ex) {
            Logger.getLogger(Captcha.class.getName()).log(Level.SEVERE, null, ex);
        }
        return json;
    }
}
