CREATE TRIGGER year_check
 BEFORE INSERT OR UPDATE ON ROOM  
 FOR EACH ROW

 SELECT RIGHT(:ROOM.start_date, 2) as StartYear;
 if (StartYear < '21')
 Then
  RAISE_APPLICATION_ERROR(
   -20001,
   'Start Date cannot be before 2021');
  END IF;
END;


CREATE OR REPLACE TRIGGER salary_max
 BEFORE INSERT or UPDATE on EMPLOYEE
 FOR EACH ROW
BEGIN
 IF(:EMPLOYEE.salary > 100000 )
 Then
  RAISE_APPLICATION_ERROR(
    -20001,
    'The Salary is too much');
  END IF;
END;
