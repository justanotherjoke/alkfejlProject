
package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Reservation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface ReservationRepository extends CrudRepository<Reservation, Long> {
    List<Reservation> findByCheckin(Date date);
    
    List<Reservation> findByCheckinGreaterThanEqual(Date date);
    
    List<Reservation> findByCheckoutLessThanEqual(Date date);
    
    List<Reservation> findByUserId(Long id);
}
