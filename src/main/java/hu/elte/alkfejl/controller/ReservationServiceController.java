/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.annotation.Role;
import hu.elte.alkfejl.entity.Guest;
import hu.elte.alkfejl.entity.Reservation;
import hu.elte.alkfejl.entity.Room;
import static hu.elte.alkfejl.entity.User.Role.ADMIN;
import static hu.elte.alkfejl.entity.User.Role.USER;
import hu.elte.alkfejl.service.ReservationService;
import hu.elte.alkfejl.service.UserNotValidException;
import hu.elte.alkfejl.service.UserService;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/reservation")
public class ReservationServiceController {

    @Autowired
    private ReservationService reservationService;

    @Autowired
    private UserService userService;

    @Role({ADMIN, USER})
    @GetMapping(value = "/reservations/all")
    public ResponseEntity<List<Reservation>> getAllReservation() {
        return ResponseEntity.ok(reservationService.getAllReservation(userService.getLoggedInUser()));

    }
    

    @GetMapping(value = "/reservations/free/{checkin},{checkout}")
    public List<Room> getFreeRooms(@PathVariable(value = "checkin") String checkin, @PathVariable(value = "checkout") String checkout) {
        return reservationService.getFreeRooms(checkin, checkout);

    }

    @Role({ADMIN})
    //@PostMapping
    @GetMapping(value = "/reservations/{checkin},{checkout}")
    public ResponseEntity<List<Reservation>> getRoomReservationsForDate(@PathVariable(value = "checkin") String checkin, @PathVariable(value = "checkout") String checkout) {

        return ResponseEntity.ok(reservationService.getRoomReservationsForDate(checkin, checkout));
    }

    @Role({ADMIN})
    //@PostMapping
    @GetMapping(value = "/reservations/{id}")
    public ResponseEntity delete(@PathVariable(value = "id") long id) {
        reservationService.delete(id);
        return ResponseEntity.ok().build();
    }

    @Role({ADMIN, USER})
    @PostMapping("/createreservation")
    public ResponseEntity<Reservation> create(@RequestBody Reservation reservation) {
        return ResponseEntity.ok(reservationService.create(reservation, userService.getLoggedInUser()));
    }
    
    @Role({ADMIN, USER})
    @GetMapping(value = "/guest/all/{id}")
    public ResponseEntity<List<Guest>> getAllGuests(@PathVariable(value = "id") long id) {
        try {
            return ResponseEntity.ok(reservationService.getAllGuests(id, userService.getLoggedInUser()));
        } catch (UserNotValidException ex) {
            return ResponseEntity.badRequest().build();
        }

    }

    @Role({ADMIN, USER})
    @PostMapping("/guest")
    public ResponseEntity<Guest> createGuest(@RequestBody Guest guest) {
        try {
            return ResponseEntity.ok(reservationService.createGuest(guest, userService.getLoggedInUser()));
        } catch (UserNotValidException ex) {
            return ResponseEntity.badRequest().build();
        }
    }

    @Role({ADMIN, USER} )
    @PutMapping("/guest/{id}")
    private ResponseEntity<Guest> updateGuest(@PathVariable long id, @RequestBody Guest guest) {
        Guest updated;
        try {
            updated = reservationService.updateGuest(id, guest, userService.getLoggedInUser());
            return ResponseEntity.ok(updated);
        } catch (UserNotValidException ex) {
            return ResponseEntity.badRequest().build();
        }
    }
    

}
