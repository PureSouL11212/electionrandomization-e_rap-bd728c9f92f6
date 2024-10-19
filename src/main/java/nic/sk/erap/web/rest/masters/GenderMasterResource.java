package nic.sk.erap.web.rest.masters;

import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import nic.sk.erap.domain.masters.GenderMaster;
import nic.sk.erap.repository.masters.GenderMasterRepository;
import nic.sk.erap.security.AuthoritiesConstants;
import nic.sk.erap.service.dto.ResponseMessage;

/* Created on Thu Oct 03 2024 by Kuldeep, NIC Sikkim  */

@RestController
@RequestMapping("api")
public class GenderMasterResource {

    @Autowired
    private GenderMasterRepository genderMasterRepository;

    @PreAuthorize("hasAuthority(\"" + AuthoritiesConstants.SITE_ADMIN + "\")")
    @RequestMapping(value = "/gender", method = RequestMethod.POST)
    public ResponseEntity<ResponseMessage> saveGender(@RequestBody GenderMaster genderMaster)
            throws URISyntaxException {
        System.out.println(genderMaster);
        genderMasterRepository.save(genderMaster);
        ResponseMessage msg = new ResponseMessage();
        msg.setMessage("Gender saved successfully");
        return new ResponseEntity<>(msg, HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority(\"" + AuthoritiesConstants.SITE_ADMIN + "\")")
    @RequestMapping(value = "/getAllGenders", method = RequestMethod.GET)
    public Page<GenderMaster> getAllGenders(Pageable pageable) throws URISyntaxException {
        return genderMasterRepository.findAll(pageable);
    }

    @RequestMapping(value = "/getAllActiveGenders", method = RequestMethod.GET)
    public List<GenderMaster> getAllActiveGenders() throws URISyntaxException {
        return genderMasterRepository.findAllByActive(true);
    }
}
