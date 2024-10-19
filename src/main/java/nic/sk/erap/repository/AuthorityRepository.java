package nic.sk.erap.repository;

import nic.sk.erap.domain.Authority;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import java.util.List;

/**
 * Spring Data JPA repository for the Authority entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AuthorityRepository extends JpaRepository<Authority, String> {
    List<Authority> findAllByNameIn(List<String> names);
}
