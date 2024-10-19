package nic.sk.erap.domain.masters;

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

import java.util.logging.Level;
import java.util.logging.Logger;

/* Created on Thu Oct 03 2024 by Kuldeep, NIC Sikkim  */

@Entity
@Table(name = "mst_gender")
public class GenderMaster extends AbstractAuditingEntity<Long> {

    @Id
    @SequenceGenerator(name = "mst_gender_id_seq", sequenceName = "mst_gender_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "mst_gender_id_seq", strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "gender_code")
    private String genderCode;

    @Column(name = "gender_name")
    private String genderName;

    @Column(name = "gender_name_ll")
    private String genderNameLL;

    @Column(name = "active")
    private Boolean active;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGenderCode() {
        return genderCode;
    }

    public void setGenderCode(String genderCode) {
        this.genderCode = genderCode;
    }

    public String getGenderName() {
        return genderName;
    }

    public void setGenderName(String genderName) {
        this.genderName = genderName;
    }

    public String getGenderNameLL() {
        return genderNameLL;
    }

    public void setGenderNameLL(String genderNameLL) {
        this.genderNameLL = genderNameLL;
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
            Logger.getLogger(GenderMaster.class.getName()).log(Level.SEVERE, null, ex);
        }
        return json;
    }
}
