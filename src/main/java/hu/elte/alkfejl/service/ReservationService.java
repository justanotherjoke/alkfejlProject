package hu.elte.alkfejl.service;

import hu.elte.alkfejl.entity.Guest;
import hu.elte.alkfejl.entity.Reservation;
import hu.elte.alkfejl.entity.Room;
import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.repository.GuestRepository;
import hu.elte.alkfejl.repository.ReservationRepository;
import hu.elte.alkfejl.repository.RoomRepository;
import hu.elte.alkfejl.repository.UserRepository;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationService {

    private RoomRepository roomRepository;
    private GuestRepository guestRepository;
    private ReservationRepository reservationRepository;
    private UserRepository userRepository;
    
    @Autowired
    public ReservationService(RoomRepository roomRepository, GuestRepository guestRepository, ReservationRepository reservationRepository, UserRepository userRepository) {
        this.roomRepository = roomRepository;
        this.guestRepository = guestRepository;
        this.reservationRepository = reservationRepository;
        this.userRepository = userRepository;
    }
    
    public void delete(long id) {
        reservationRepository.delete(id);
    }
    
    public List<Reservation> getRoomReservationsForDate(String checkin, String checkout) {
        // checkin-től checout-ig foglalt szobák
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date parsed;
        try {
            //parsed = format.parse("2018-01-01");
            parsed = format.parse(checkin);
            java.sql.Date sqlCheckin = new java.sql.Date(parsed.getTime());
            parsed = format.parse(checkout);
            java.sql.Date sqlCheckout = new java.sql.Date(parsed.getTime());
            List<Reservation> list1 = reservationRepository.findByCheckinGreaterThanEqual(sqlCheckin);
            List<Reservation> list2 = reservationRepository.findByCheckoutLessThanEqual(sqlCheckout);
            list2.retainAll (list1);
            return list2;
            
        } catch (ParseException ex) {
            Logger.getLogger(ReservationService.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;

        
    }
    
    
    public List<Room> getFreeRooms(String checkin, String checkout) {
        // checkin-től checout-ig foglalt szobák:
        List<Reservation> reservations = getRoomReservationsForDate(checkin, checkout);
        List<Room> rooms = new ArrayList<>();
        reservations.forEach(reservation -> {
            rooms.add(roomRepository.findById(reservation.getRoom().getId()));
        });
        // összes szoba:
        List<Room> rooms2 = (List<Room>) roomRepository.findAll();
        // összes szabad szoba:
        rooms2.removeAll(rooms);
        
        return rooms2;
                
    }
    
    public Reservation create(Reservation reservation, User user) {
        reservation.setTimestamp(Timestamp.valueOf(LocalDateTime.now()));
        reservation.setUser(user);
        return reservationRepository.save(reservation);
    }
    
    public List<Reservation> getAllReservation(User user) {
        if(user.getRole().toString().equals("ADMIN") ) {
            return (List<Reservation>)reservationRepository.findAll();
        }
        return reservationRepository.findByUserId(user.getId());//(List<Reservation>)reservationRepository.findAll();
    }
    
    public Guest createGuest(Guest guest, User user) throws UserNotValidException {
        long reservationId = guest.getReservation().getId();
        long userId = reservationRepository.findOne(reservationId).getUser().getId();
        if(userId == user.getId()) {
            return guestRepository.save(guest);
        } else {
            throw new UserNotValidException();
        }
    }
    
    public Guest updateGuest(long id, Guest guest, User user) throws UserNotValidException {
        Guest currentGuest = guestRepository.findOne(id);
        if (currentGuest!= null && currentGuest.getReservation().getUser().getId() == user.getId()) {
            currentGuest.setFirstName(guest.getFirstName());
            currentGuest.setLastName(guest.getLastName());
            currentGuest.setId(id);
            return guestRepository.save(currentGuest);
        } else {
            throw new UserNotValidException();
        }
        
    }
    
    public List<Guest> getAllGuests(long id,User user) throws UserNotValidException {
        long userId = reservationRepository.findOne(id).getUser().getId();
        if(user.getRole().toString().equals("ADMIN") || userId == user.getId()) {
            return (List<Guest>)guestRepository.findAllByReservationId(id);
        }
        else {
            throw new UserNotValidException();
        }
    }
    
}
    

