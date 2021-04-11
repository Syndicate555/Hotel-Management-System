CREATE OR REPLACE TRIGGER year_check
 BEFORE INSERT OR UPDATE ON ROOM  
 FOR EACH ROW

 SELECT RIGHT(:ROOM.start_date, 2) as ExtractString;
 if (ExtractString != '21')
 Then
  RAISE_APPLICATION_ERROR(
   -20001,
   'Booking only valid for 2021'
  END IF;
END;
  )