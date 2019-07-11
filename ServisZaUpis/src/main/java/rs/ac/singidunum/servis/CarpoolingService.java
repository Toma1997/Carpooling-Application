package rs.ac.singidunum.servis;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileWriter;
import java.io.IOException;

@RestController
public class CarpoolingService {

    @CrossOrigin
    @PostMapping(path="/users")
    public void saveUsers(@RequestBody String jsonData){
      try (FileWriter file = new FileWriter("../Carpooling/src/assets/json_db/users.json")) {
        file.write(jsonData);

      } catch (IOException e) {
        e.printStackTrace();
      }
    }

    @CrossOrigin // za cross domain komunikaciju, omogocuvanje komunikacije izmedju razlicitih domena
    @PostMapping(path="/comments")
    public void saveComments(@RequestBody String jsonData){
      try (FileWriter file = new FileWriter("../Carpooling/src/assets/json_db/comments.json")) {
        file.write(jsonData);

      } catch (IOException e) {
        e.printStackTrace();
      }
    }

    @CrossOrigin
    @PostMapping(path="/ratings")
    public void saveRatings(@RequestBody String jsonData){
      try (FileWriter file = new FileWriter("../Carpooling/src/assets/json_db/rates.json")) {
        file.write(jsonData);

      } catch (IOException e) {
        e.printStackTrace();
      }
    }

    @CrossOrigin
    @PostMapping(path="/rides")
    public void saveRides(@RequestBody String jsonData){
      try (FileWriter file = new FileWriter("../Carpooling/src/assets/json_db/rides.json")) {
        file.write(jsonData);

      } catch (IOException e) {
        e.printStackTrace();
      }
    }

}

