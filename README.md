import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.FileInputStream;
import java.util.Iterator;

public class ExcelDataViewer extends Application {
    private Iterator<Row> rowIterator;
    private Stage stage;

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) {
        stage = primaryStage;
        primaryStage.setTitle("Excel Data Viewer");

        Button nextButton = new Button("Next");
        nextButton.setOnAction(e -> displayNextRow());

        VBox vbox = new VBox(10);
        vbox.getChildren().addAll(nextButton);

        Scene scene = new Scene(vbox, 300, 200);
        primaryStage.setScene(scene);
        primaryStage.show();

        loadExcelData();
    }

    private void loadExcelData() {
        try {
            FileInputStream excelFile = new FileInputStream("your_excel_file.xlsx");
            Workbook workbook = new XSSFWorkbook(excelFile);
            Sheet sheet = workbook.getSheetAt(0); // Assuming you want the first sheet.

            rowIterator = sheet.iterator();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void displayNextRow() {
        if (rowIterator.hasNext()) {
            Row row = rowIterator.next();
            // You can access cell values in the row using row.getCell(cellIndex).

            // For example, to display the values in a dialog or a label:
            // String cellValue = row.getCell(0).getStringCellValue();
            // Display cellValue in your GUI.

            // Once you reach the end, you can handle it accordingly.
        } else {
            // Handle the end of the data.
            stage.close(); // Close the application or display a message.
        }
    }
}
