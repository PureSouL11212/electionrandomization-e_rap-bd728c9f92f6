
package nic.sk.erap.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import nic.sk.erap.domain.Captcha;

/* Created on Thu Oct 03 2024 by Kuldeep, NIC Sikkim  */

@Repository
public interface CaptchaRepository extends CrudRepository<Captcha, Long> {
    @Override
    void delete(Captcha captcha);

    @Override
    void deleteById(Long id);

    public Captcha findOneByKey(String captchaValue);

    public Captcha findOneByIdAndKey(Long id, String captchaValue);
}
