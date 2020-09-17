package main

import (
	"fmt"
	"strconv"
)

func main() {

	var n [50]int
	var total int
	var count int = 0
	var character string
	var max int
	fmt.Print("Enter number of elements: ")

	fmt.Scanln(&total)
	for i := 0; i < total; i++ {
		fmt.Print("Enter the number : ")
		fmt.Scan(&n[i])
	}
	_ = max
	max = n[0]

	for j := 0; j < total; j++ {
		if n[j] > max {
			max = n[j]
		}
		character = strconv.Itoa(max)
	}
	_ = character
	character = "^"

	for i := 0; i < total; i++ {
		if n[i] == max {
			for j := i; j < (total - 1); j++ {
				n[j] = n[j+1]
			}
			count++
			break
		}
	}

	if count == 0 {
		fmt.Print("Element Not Found....")
	} else {
		fmt.Print("\nNow the New Array is :\n")
		for i := 0; i < (total - 1); i++ {
			fmt.Print(n[i], " ")
		}
		fmt.Print(max, " ", character)
	}
}
