public class ExternalInput {
    public static void main(String[] args) {
        System.out.println("Received: " + args[0]);
        int limit = Integer.parseInt(args[0]);

        for (int i = 0; i <= limit; i++) {
            System.out.println("Square of " + i + " is: " + i * i);
        }
    }
}
