package main

import (
	"fmt"
)

func main() {

	var M int
	var N int
	var matrix [100][100]int
	var searchElement int

	fmt.Println("Enter Number of matrix rows : ")

	fmt.Scanln(&M)

	fmt.Println("Enter Number of matrix column : ")

	fmt.Scanln(&N)

	fmt.Print("Enter matrix : ")

	if 1 <= M {
		for i := 0; i < M; i++ {
			if N <= 20 {
				for j := 0; j < N; j++ {
					fmt.Scanln(&matrix[i][j])
				}
			}
		}
	}

	fmt.Printf("Your matrix : \n")

	if 1 <= M {
		for i := 0; i < M; i++ {
			if N <= 20 {
				for j := 0; j < N; j++ {
					fmt.Print(matrix[i][j], "\t")
				}
				fmt.Println()
			}
		}
	}

	fmt.Println("Enter Number of matrix search : ")

	fmt.Scanln(&searchElement)

	fmt.Printf("Your matrix position rows and column : \n")

	var i = 0
	var j = M - 1

	for i < M && j >= 0 {
		if matrix[i][j] == searchElement {
			fmt.Print("\n Found at ", i, " ", j)
			return
		}

		if matrix[i][j] > searchElement {
			j--
		} else {
			i++
		}
	}
	fmt.Print("\n Element not found")

}
