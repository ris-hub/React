import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class Solution {
    public static void main(String[] args) {
        // String[] emailAddresses = {
        // "ghi@hotmail.com", "def@yahoo.com", "ghi@gmail.com", "abc@channelier.com",
        // "abc@hotmail.com", "def@hotmail.com", "abc@gmail.com", "abc@yahoo.com",
        // "def@channelier.com", "jkl@hotmail.com", "ghi@yahoo.com", "def@gmail.com"
        // };
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] emailAddresses = new String[n];
        for (int i = 0; i < n; i++) {
            emailAddresses[i] = sc.next();
        }

        Map<String, String> firstEmailsByDomain = getFirstEmailsByDomain(emailAddresses);

        for (String domain : firstEmailsByDomain.values()) {
            sendMail(domain);
        }
    }

    public static Map<String, String> getFirstEmailsByDomain(String[] emailAddresses) {
        Map<String, String> firstEmailsByDomain = new TreeMap<>();

        for (String email : emailAddresses) {
            String domain = email.split("@")[1];
            if (!firstEmailsByDomain.containsKey(domain) || email.compareTo(firstEmailsByDomain.get(domain)) < 0) {
                firstEmailsByDomain.put(domain, email);
            }
        }

        return firstEmailsByDomain;
    }

    public static void sendMail(String emailAddress) {
        System.out.println(emailAddress);
    }
}
