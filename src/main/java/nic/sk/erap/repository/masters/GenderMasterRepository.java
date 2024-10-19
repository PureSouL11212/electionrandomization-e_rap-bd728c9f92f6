package nic.sk.erap.repository.masters;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import nic.sk.erap.domain.masters.GenderMaster;

/* Created on Thu Oct 03 2024 by Kuldeep, NIC Sikkim  */


@Repository
public interface GenderMasterRepository extends JpaRepository<GenderMaster, Long> {
    GenderMaster findOneById(Long id);

    Page<GenderMaster> findAll(Pageable pageable);

    List<GenderMaster> findAllByActive(boolean b);
}
