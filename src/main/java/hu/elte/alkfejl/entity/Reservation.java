
package hu.elte.alkfejl.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reservation {
    @JoinColumn
    @ManyToOne(targetEntity = User.class, optional = false)
    @JsonIgnoreProperties("reservations")
    private User user;
    
    @JoinColumn
    @ManyToOne(targetEntity = Room.class, optional = false)
    @JsonIgnoreProperties("reservations")
    private Room room;
    
    
    @OneToMany(targetEntity = Guest.class, mappedBy = "reservation")
    @JsonIgnore
    private List<Guest> guests;
    

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @Column(nullable = false)
    private Timestamp timestamp;

    @Column(nullable = false)
    private Date checkin;

    @Column(nullable = false)
    private Date checkout;
    /*
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


    public Date getCheckin() {
        return checkin;
    }

    public void setCheckin(Date checkin) {
        this.checkin = checkin;
    }
    
    public Date getCheckout() {
        return checkin;
    }

    public void setCheckout(Date checout) {
        this.checkout = checkout;
    }
    */
    public String toString() {
        return "reservation: " + this.id;
    }
    
}
