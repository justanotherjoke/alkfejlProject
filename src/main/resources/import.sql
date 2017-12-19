insert into user (username, password, email, role) values ('user', 'u', 'user@alma.hu', 'USER');
insert into user (username, password, email, role) values ('user2', 'u2', 'user2@alma.hu', 'USER');
insert into user (username, password, email, role) values ('user3', 'u3', 'user3@alma.hu', 'USER');
insert into user (username, password, email, role) values ('admin', 'a', 'admin@alma.hu', 'ADMIN');

insert into room (room_name, bedinfo, room_number) values ('KingsJuniorSuite', '1LD', 'KJS1');
insert into room (room_name, bedinfo, room_number) values ('KingsJuniorSuite', '1LD', 'KJS2');
insert into room (room_name, bedinfo, room_number) values ('KingsJuniorSuite', '1LD', 'KJS3');
insert into room (room_name, bedinfo, room_number) values ('KingsJuniorSuite', '1LD', 'KJS4');
insert into room (room_name, bedinfo, room_number) values ('KingsJuniorSuite', '1LD', 'KJS5');

insert into room (room_name, bedinfo, room_number) values ('KingDeluxeJuniorSuite', '1ELD', 'KDJS1');
insert into room (room_name, bedinfo, room_number) values ('KingDeluxeJuniorSuite', '1ELD', 'KDJS2');
insert into room (room_name, bedinfo, room_number) values ('KingDeluxeJuniorSuite', '1ELD', 'KDJS3');
insert into room (room_name, bedinfo, room_number) values ('KingDeluxeJuniorSuite', '1ELD', 'KDJS4');
insert into room (room_name, bedinfo, room_number) values ('KingDeluxeJuniorSuite', '1ELD', 'KDJS5');

insert into room (room_name, bedinfo, room_number) values ('KingsOneBedroomSuite', '1LD', 'KOBS1');
insert into room (room_name, bedinfo, room_number) values ('KingsOneBedroomSuite', '1LD', 'KOBS2');
insert into room (room_name, bedinfo, room_number) values ('KingsOneBedroomSuite', '1LD', 'KOBS3');
insert into room (room_name, bedinfo, room_number) values ('KingsOneBedroomSuite', '1LD', 'KOBS4');
insert into room (room_name, bedinfo, room_number) values ('KingsOneBedroomSuite', '1LD', 'KOBS5');

insert into room (room_name, bedinfo, room_number) values ('FalconersTwoBedroomSuite', '2S-1ELD', 'FTBS1');
insert into room (room_name, bedinfo, room_number) values ('FalconersTwoBedroomSuite', '2S-1ELD', 'FTBS2');

insert into room (room_name, bedinfo, room_number) values ('MinistersDeluxeTwoBedroomSuite', '1ELD-2S', 'MDTBS1');
insert into room (room_name, bedinfo, room_number) values ('MinistersDeluxeTwoBedroomSuite', '1ELD-2S', 'MDTBS2');

insert into room (room_name, bedinfo, room_number) values ('PresidentialThreeBedroomSuite', '1EL-2S-1ELD', 'PTBS1')

insert into issue (user_id, description, location, status, timestamp) values (1, 'a', 'a', 'ADDED', current_timestamp);
insert into issue (user_id, description, location, status, timestamp) values (1, 'b', 'b', 'ADDED', current_timestamp);
insert into issue (user_id, description, location, status, timestamp) values (1, 'c', 'c', 'ADDED', current_timestamp);
insert into issue (user_id, description, location, status, timestamp) values (2, 'd', 'd', 'ADDED', current_timestamp);
insert into issue (user_id, description, location, status, timestamp) values (2, 'e', 'e', 'ADDED', current_timestamp);

insert into reservation (user_id, room_id, checkin, checkout, timestamp) values(1, 3, '2018-01-01', '2018-01-02', current timestamp);
insert into reservation (user_id, room_id, checkin, checkout, timestamp) values(2, 5, '2018-01-01', '2018-01-04', current timestamp);
insert into reservation (user_id, room_id, checkin, checkout, timestamp) values(1, 7, '2018-01-10', '2018-01-12', current timestamp);
insert into reservation (user_id, room_id, checkin, checkout, timestamp) values(2, 19, '2018-01-05', '2018-01-13', current timestamp);
insert into reservation (user_id, room_id, checkin, checkout, timestamp) values(3, 14, '2018-02-01', '2018-02-02', current timestamp);
insert into reservation (user_id, room_id, checkin, checkout, timestamp) values(1, 2, '2018-02-01', '2018-02-12', current timestamp);

insert into guest (first_name, last_name, reservation_id) values('Roy', 'Tucker', 1);
insert into guest (first_name, last_name, reservation_id) values('Brian', 'Wagner', 1);
insert into guest (first_name, last_name, reservation_id) values('Chris', 'Tucker', 2);
insert into guest (first_name, last_name, reservation_id) values('George', 'Washington', 2);
insert into guest (reservation_id) values(1);

