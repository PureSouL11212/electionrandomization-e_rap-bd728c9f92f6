package nic.sk.erap.domain.masters;

import java.util.logging.Level;
import java.util.logging.Logger;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import nic.sk.erap.domain.AbstractAuditingEntity;

/* Created on Thu Oct 03 2024 by Kuldeep, NIC Sikkim  */

@Entity
@Table(name = "mst_district")
public class DistrictMaster extends AbstractAuditingEntity<Long> {

    @Id
    @SequenceGenerator(name = "mst_district_id_seq", sequenceName = "mst_district_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "mst_district_id_seq", strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "district_code")
    private Integer districtCode;

    @Column(name = "district_name")
    private String districtName;

    @Column(name = "district_name_ll")
    private String districtNameLL;

    @Column(name = "state_code")
    private Integer stateCode;

    @Column(name = "active")
    private Boolean active;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "state_code", referencedColumnName = "state_code", insertable = false, updatable = false)
    private StateMaster state;

    public String getStateName() {
        if (state != null) {
            return state.getStateName();
        } else {
            return "";
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getDistrictCode() {
        return districtCode;
    }

    public void setDistrictCode(Integer districtCode) {
        this.districtCode = districtCode;
    }

    public String getDistrictName() {
        return districtName;
    }

    public void setDistrictName(String districtName) {
        this.districtName = districtName;
    }

    public String getDistrictNameLL() {
        return districtNameLL;
    }

    public void setDistrictNameLL(String districtNameLL) {
        this.districtNameLL = districtNameLL;
    }

    public Integer getStateCode() {
        return stateCode;
    }

    public void setStateCode(Integer stateCode) {
        this.stateCode = stateCode;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    @Override
    public String toString() {
        ObjectWriter ow = new ObjectMapper().registerModule(new JavaTimeModule()).writer().withDefaultPrettyPrinter();
        String json = null;
        try {
            json = ow.writeValueAsString(this);
        } catch (JsonProcessingException ex) {
            Logger.getLogger(DistrictMaster.class.getName()).log(Level.SEVERE, null, ex);
        }
        return json;
    }
}
