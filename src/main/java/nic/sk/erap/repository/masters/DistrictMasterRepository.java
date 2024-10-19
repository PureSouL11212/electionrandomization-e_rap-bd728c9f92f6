package nic.sk.erap.repository.masters;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import nic.sk.erap.domain.masters.DistrictMaster;

/* Created on Thu Oct 03 2024 by Kuldeep, NIC Sikkim  */

@Repository
public interface DistrictMasterRepository extends JpaRepository<DistrictMaster, Long> {
    DistrictMaster findOneByDistrictCode(Integer districtCode);

    List<DistrictMaster> findAllByStateCode(Integer stateCode);
    Page<DistrictMaster> findAllByStateCode(Integer stateCode, Pageable pageable);

    Page<DistrictMaster> findAll(Pageable pageable);

    Long countAllByStateCode(Integer stateCode);
}
