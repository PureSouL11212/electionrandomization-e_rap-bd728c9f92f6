package nic.sk.erap.domain.masters;

import java.util.logging.Level;
import java.util.logging.Logger;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import nic.sk.erap.domain.AbstractAuditingEntity;

/* Created on Thu Oct 03 2024 by Kuldeep, NIC Sikkim  */


@Entity
@Table(name = "mst_state")
public class StateMaster extends AbstractAuditingEntity<Long> {

    @Id
    @SequenceGenerator(name = "mst_state_id_seq", sequenceName = "mst_state_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "mst_state_id_seq", strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "state_code")
    private Integer stateCode;

    @Column(name = "state_name")
    private String stateName;

    @Column(name = "state_name_ll")
    private String stateNameLL;

    @Column(name = "active")
    private Boolean active;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getStateCode() {
        return stateCode;
    }

    public void setStateCode(Integer stateCode) {
        this.stateCode = stateCode;
    }

    public String getStateName() {
        return stateName;
    }

    public void setStateName(String stateName) {
        this.stateName = stateName;
    }

    public String getStateNameLL() {
        return stateNameLL;
    }

    public void setStateNameLL(String stateNameLL) {
        this.stateNameLL = stateNameLL;
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
            Logger.getLogger(StateMaster.class.getName()).log(Level.SEVERE, null, ex);
        }
        return json;
    }
}
