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

import nic.sk.erap.domain.masters.StateMaster;
import nic.sk.erap.repository.masters.StateMasterRepository;
import nic.sk.erap.security.AuthoritiesConstants;
import nic.sk.erap.service.dto.ResponseMessage;

/* Created on Thu Oct 03 2024 by Kuldeep, NIC Sikkim  */

@RestController
@RequestMapping("api")
public class StateMasterResource {

    @Autowired
    private StateMasterRepository stateMasterRepository;

    @PreAuthorize("hasAuthority(\"" + AuthoritiesConstants.SITE_ADMIN + "\")")
    @RequestMapping(value = "/state", method = RequestMethod.POST)
    public ResponseEntity<ResponseMessage> saveState(@RequestBody StateMaster state) throws URISyntaxException {
        stateMasterRepository.save(state);
        ResponseMessage msg = new ResponseMessage();
        msg.setMessage("State saved successfully");
        return new ResponseEntity<>(msg, HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority(\"" + AuthoritiesConstants.SITE_ADMIN + "\")")
    @RequestMapping(value = "/getAllStates", method = RequestMethod.GET)
    public Page<StateMaster> getAllStates(Pageable pageable) throws URISyntaxException {
        return stateMasterRepository.findAll(pageable);
    }

    @RequestMapping(value = "/getAllActiveStates", method = RequestMethod.GET)
    public List<StateMaster> getAllActiveDepartments() throws URISyntaxException {
        return stateMasterRepository.findAllByActive(true);
    }
}
