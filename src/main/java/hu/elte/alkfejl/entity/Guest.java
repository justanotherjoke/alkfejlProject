
package hu.elte.alkfejl.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Guest {
    
    @JoinColumn
    @ManyToOne(targetEntity = Reservation.class, optional = false)
    @JsonIgnoreProperties("guests")
    private Reservation reservation;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @Column(nullable = true)
    private String firstName;

    @Column(nullable = true)
    private String lastName;

   
    public String toString() {
        return "Guest: " + this.id;
    }
    
    
}
