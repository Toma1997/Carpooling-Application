package rs.ac.singidunum.servis;

import org.springframework.web.bind.annotation.*;

import java.io.FileWriter;
import java.io.IOException;

@CrossOrigin // za cross domain komunikaciju, omogocuvanje komunikacije izmedju razlicitih domena
@RestController
public class CarpoolingService {

    @PostMapping(path="/{dataName}")
    public void saveData(@PathVariable String dataName, @RequestBody String jsonData){
        String filePath = "../Carpooling/src/assets/json_db/"+dataName+".json";
      try (FileWriter file = new FileWriter(filePath)) {
        file.write(jsonData);

      } catch (IOException e) {
        e.printStackTrace();
      }
    }


}

