import java.util.Scanner;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class SearchElement {

    public static void main(String args[]) {
        int size, i, max, count = 0;
        int arr[] = new int[50];
        String character, join;
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter Array Size : ");
        size = scan.nextInt();

        System.out.print("Enter Array Elements : ");
        for (i = 0; i < size; i++) {
            arr[i] = scan.nextInt();
        }

        max = arr[0];

        for (i = 0; i < size; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
            character = Integer.toString(max);
        }
        character = "^";
        
       for(i=0; i<size; i++)
       {
           if(arr[i] == max)
           {
               for(int j=i; j<(size-1); j++)
               {
                   arr[j] = arr[j+1];
               }
               count++;
               break;
           }
       }

       if(count==0)
       {
           System.out.print("Element Not Found..!!");
       }
       else
       {
           System.out.print("\nNow the New Array is :\n");

           for(i=0; i<(size-1); i++)
           {    
                System.out.print(arr[i]+ " ");
           }
           System.out.print(max + " " + character);
  
       }
   }
}
