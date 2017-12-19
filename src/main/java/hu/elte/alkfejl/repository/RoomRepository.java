
package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Room;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends CrudRepository<Room, Long> {
	Room findByRoomNumber(String number);
        
        Room findById(Long id);
        //List<Room> findAllByReservationId(Long reservationId);
}

