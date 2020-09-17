import java.io.*; 
import java.util.Scanner;
  
class Oscillated { 
      
    // Recursive function to print the  
    // pattern without any extra variable 
    static void printOscillatedNum(int N) 
    { 
        
            if (N == 0 || N < 0) { 
              
                System.out.print(N + " "); 
                  
                return; 
            } 
      
            // First print decreasing order 
            System.out.print(N + " "); 
              
            printOscillatedNum(N - 5); 
      
            // Then print increasing order 
            System.out.print(N + " "); 
        // Base case (When n becomes 0 or  
        // negative) 
       
    } 
  
    // Driver Program 
    public static void main(String[] args) 
    { 
          
        Scanner n = new Scanner( System.in );
		int A;
		System.out.print( "Enter your number: " );
        A = n.nextInt();
        System.out.print( "Your value feedback: " );
        printOscillatedNum(A);
    } 
} 