
package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Guest;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuestRepository extends PagingAndSortingRepository<Guest, Long> {
    List<Guest> findAllByReservationId(long id);
}