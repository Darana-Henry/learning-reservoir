package projects.taxcalculator;

public class TaxCalculator {
    public static void main(String[] args) {

        TaxCalculator tx = new TaxCalculator();
        tx.printRow("Salary", "Tax", "Annual Take Home", "Monthly Take Home");
        for (double i = 3000000; i < 10000001; i = i + 500000) {
            double tax = tx.calculateTax(i);
            double annualTakeHome = i - tax;
            double monthlyTakeHome = Math.round(((i - tax) / 12) * 100) / 100;
            tx.printRow(String.valueOf(i), String.valueOf(tax), String.valueOf(annualTakeHome),
                    String.valueOf(monthlyTakeHome));
        }
    }

    public double calculateTax(double salary) {
        double tax = 0;
        if (salary <= 300000)
            tax += 0;
        else if (salary > 300000 && salary <= 600000) {
            if (salary > 600000)
                tax += (600000 - 300000) * 5 / 100;
            else
                tax += (salary - 300000) * 5 / 100;
        } else if (salary > 600000 && salary <= 900000) {
            if (salary > 900000)
                tax += (900000 - 600000) * 10 / 100;
            else
                tax += (salary - 600000) * 10 / 100;
        } else if (salary > 900000 && salary <= 1200000) {
            if (salary > 1200000)
                tax += (1200000 - 900000) * 15 / 100;
            else
                tax += (salary - 900000) * 15 / 100;
        } else if (salary > 1200000 && salary <= 1500000) {
            if (salary > 1500000)
                tax += (1500000 - 1200000) * 20 / 100;
            else
                tax += (salary - 1200000) * 20 / 100;
        } else if (salary > 1500000)
            tax += (salary - 1200000) * 20 / 100;

        return tax;
    }


    public static void printRow(String salary, String tax, String annualTakeHome, String monthlyTakeHome) {
        String format = "| %-15s | %-15s | %-18s | %-18s |%n";
        String row = String.format(format, salary, tax, annualTakeHome, monthlyTakeHome);
        String border = "+-----------------+-----------------+--------------------+--------------------+";

        //System.out.println(border);
        System.out.print(row);
        System.out.println(border);
    }
}
