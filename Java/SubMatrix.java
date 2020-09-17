// package com.ms.matrix;

import java.util.Scanner;

public class SubMatrix{

    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);

            System.out.println("Enter Number of Matrix rows");
            
            int M = scan.nextInt();

            System.out.println("Enter Number of Matrix column");

            int N = scan.nextInt();

            int[][] matrix = new int[M][N];

            enterMatrixData(scan, matrix, M, N);

            printMatrixData(matrix, M, N);

            System.out.println("Enter Number of Matrix Search : ");

            int searchElement = scan.nextInt();

            printMatrixPosition(matrix, M, N, searchElement);
    }

    public static void enterMatrixData(Scanner scan, int[][] matrix, int M, int N){
        System.out.println("Enter matrix : ");
    
        if(1 <= M){
            for (int i = 0; i < M; i++)
            {
                if(N <= 20)
                {
                    for(int j = 0; j < N; j++)
                    {
                        matrix[i][j] = scan.nextInt();
                    }
                }
            }
        }

    }
    

    public static void printMatrixData(int[][] matrix, int M, int N){
        System.out.println("Your matrix : ");

            if(1 <= M)
            {
                for (int i = 0; i < M; i++)
                {
                    if(N <= 20){
                        for(int j = 0; j < N; j++)
                        {
                            System.out.print(matrix[i][j]+"\t");
                        }
                        System.out.println();
                    }
                } 
            } 
    }

    public static void printMatrixPosition(int[][] matrix, int M, int N, int searchElement) {
        System.out.println("Your matrix position rows and column : ");

        int i = 0, j = M - 1;

        while (i < M && j >= 0){
            if(matrix[i][j] == searchElement){
                System.out.print("\n Found at " + i + " " + j);
                return;
            }

            if(matrix[i][j] > searchElement){
                j--;
            }else{
                i++;
            }
        }
        System.out.print("\n Element not found");
    }

}