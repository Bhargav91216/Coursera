import javax.swing.*;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.FileInputStream;

public class ExcelReaderApp extends JFrame {
    private Workbook workbook;
    private Sheet sheet;
    private int currentRow = 0;

    public ExcelReaderApp() {
        // Initialize your JFrame and components here.

        JButton nextButton = new JButton("Next");
        JComboBox<String> statusComboBox = new JComboBox<>(new String[]{"None", "Pass", "Fail", "Pending"});
        statusComboBox.setSelectedItem("None");

        nextButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String status = (String) statusComboBox.getSelectedItem();
                if (status.equals("None")) {
                    JOptionPane.showMessageDialog(null, "Please select an option.");
                } else {
                    setCellData(currentRow, 3, status); // Assuming 0-based index for columns
                    currentRow++;
                    if (currentRow < sheet.getPhysicalNumberOfRows()) {
                        // Show the next row's data
                        // You can update your UI to display the data from the Excel sheet here.
                    } else {
                        JOptionPane.showMessageDialog(null, "End of data.");
                    }
                }
            }
        });
    }

    private void setCellData(int row, int col, String value) {
        Row excelRow = sheet.getRow(row);
        if (excelRow == null) {
            excelRow = sheet.createRow(row);
        }
        Cell cell = excelRow.createCell(col);
        cell.setCellValue(value);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            ExcelReaderApp app = new ExcelReaderApp();
            app.setVisible(true);
        });
    }
}
