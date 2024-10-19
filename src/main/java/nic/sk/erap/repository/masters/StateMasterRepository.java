package nic.sk.erap.repository.masters;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import nic.sk.erap.domain.masters.StateMaster;

/* Created on Thu Oct 03 2024 by Kuldeep, NIC Sikkim  */

@Repository
public interface StateMasterRepository extends JpaRepository<StateMaster, Long> {
    StateMaster findOneByStateCode(Integer stateCode);

    List<StateMaster> findAllByActive(boolean b);
}
