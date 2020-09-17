import java.util.Scanner;

class BonusCoklatFunc { 
      
    // Recursive function to print the  
    // pattern without any extra variable 
    public static double BonusCoklat(double Jumlah) 
    { 
        double Nilai;
        double bonusTukar;
        double Total;

        Nilai = Math.floor(Jumlah) / 5;

        if(Nilai > 5){  
            bonusTukar = Nilai / 5;
        }else{
            bonusTukar = 0;
        }

        return Total = Math.floor(Jumlah + Nilai + bonusTukar);
        
    } 
  
    // Driver Program 
    public static void main(String[] args) 
    { 
          
        Scanner N = new Scanner( System.in );
		double A;
		System.out.print( "Jumlah Bungkus Coklat yang ditukar : " );
        A = N.nextDouble();
        int JumlahBonus = (int) BonusCoklat(A);
        System.out.print( "Your value feedback: " + JumlahBonus);

    } 
} 