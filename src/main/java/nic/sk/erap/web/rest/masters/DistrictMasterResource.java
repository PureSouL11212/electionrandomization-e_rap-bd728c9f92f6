package nic.sk.erap.web.rest.masters;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import nic.sk.erap.domain.masters.DistrictMaster;
import nic.sk.erap.repository.masters.DistrictMasterRepository;
import nic.sk.erap.security.AuthoritiesConstants;
import nic.sk.erap.service.dto.ResponseMessage;

/* Created on Thu Oct 03 2024 by Kuldeep, NIC Sikkim  */

@RestController
@RequestMapping("api")
public class DistrictMasterResource {

    @Autowired
    private DistrictMasterRepository districtMasterRepository;

    @PreAuthorize("hasAuthority(\"" + AuthoritiesConstants.SITE_ADMIN + "\")")
    @RequestMapping(value = "/district", method = RequestMethod.POST)
    public ResponseEntity<ResponseMessage> saveDistrict(@RequestBody DistrictMaster district) {
        districtMasterRepository.save(district);
        ResponseMessage msg = new ResponseMessage();
        msg.setMessage("District added successfully");
        return new ResponseEntity<ResponseMessage>(msg, HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority(\"" + AuthoritiesConstants.SITE_ADMIN + "\")")
    @RequestMapping(value = "/getAllDistricts", method = RequestMethod.GET)
    public Page<DistrictMaster> getAllDistrictsByStateCode(Pageable pageable) {
        return districtMasterRepository.findAllByStateCode(11, pageable);
    }

    // @PreAuthorize("hasAuthority(\"" + AuthoritiesConstants.SITE_ADMIN + "\")")
    @RequestMapping(value = "/getAllActiveDistrictsByStateCode", method = RequestMethod.GET)
    public List<DistrictMaster> getAllActiveDistrictsByStateCode(@RequestParam(name = "stateCode") Integer stateCode) {
        return districtMasterRepository.findAllByStateCode(stateCode);
    }
}
