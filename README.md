import javax.swing.*;
import org.apache.poi.ss.usermodel.*;

public class ExcelReaderApp {
    private static int currentRow = 0;
    private static String[] options = {"None", "Pass", "Failed", "Pending"};

    public static void main(String[] args) {
        try {
            // Load Excel file
            FileInputStream fis = new FileInputStream("your_excel_file.xlsx");
            Workbook workbook = WorkbookFactory.create(fis);
            Sheet sheet = workbook.getSheetAt(0);
            
            // Create a JFrame
            JFrame frame = new JFrame("Excel Reader Application");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            
            // Create JLabel for displaying data
            JLabel dataLabel = new JLabel(getDataForRow(sheet, currentRow));
            
            // Create JComboBox for options
            JComboBox<String> optionComboBox = new JComboBox<>(options);
            
            // Create JButton for moving to the next row
            JButton nextButton = new JButton("Next");

            // Add action listener to the Next button
            nextButton.addActionListener(e -> {
                String selectedOption = (String) optionComboBox.getSelectedItem();
                if (selectedOption.equals("None")) {
                    JOptionPane.showMessageDialog(frame, "Please select an option.");
                } else {
                    updateExcelWithOption(sheet, currentRow, selectedOption);
                    currentRow++;
                    if (currentRow < sheet.getPhysicalNumberOfRows()) {
                        dataLabel.setText(getDataForRow(sheet, currentRow));
                        optionComboBox.setSelectedItem("None");
                    } else {
                        JOptionPane.showMessageDialog(frame, "All rows processed.");
                    }
                }
            });
            
            // Create JPanel for components
            JPanel panel = new JPanel();
            panel.add(dataLabel);
            panel.add(optionComboBox);
            panel.add(nextButton);
            
            frame.add(panel);
            frame.pack();
            frame.setVisible(true);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static String getDataForRow(Sheet sheet, int row) {
        Row dataRow = sheet.getRow(row);
        Cell cell1 = dataRow.getCell(0);
        Cell cell2 = dataRow.getCell(1);
        Cell cell3 = dataRow.getCell(2);
        return cell1.toString() + " " + cell2.toString() + " " + cell3.toString();
    }

    private static void updateExcelWithOption(Sheet sheet, int row, String option) {
        Row dataRow = sheet.getRow(row);
        Cell cell4 = dataRow.createCell(3);
        cell4.setCellValue(option);
    }
}
