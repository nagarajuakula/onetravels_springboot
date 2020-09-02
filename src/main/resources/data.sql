insert into roles(name) values('USER');
insert into roles(name) values( 'ADMIN');

insert into users( username, password, mobile) values( 'raju', '$2a$10$7d4rhhQqQkVFhsinY56zBejQd8XprQBtpDhw1xVnPXxqPqXMP9PCO', '1234567890');
insert into users( username, password, mobile) values( 'user', '$2a$10$7d4rhhQqQkVFhsinY56zBejQd8XprQBtpDhw1xVnPXxqPqXMP9PCO', '1234567890');

--insert into trips(date, from_location, to_location, distance, users_id) values( '2020-08-28', 'Choutuppal', 'Hyderabad', 45, 1);

insert into users_roles values(1, 2);
insert into users_roles values(2, 1);

--insert into user_trips values(1, 1);

COMMIT;