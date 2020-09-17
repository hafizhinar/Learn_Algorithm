package main

import (
	"fmt"
)

func Oscillated(N int) {

	if N == 0 || N < 0 {
		fmt.Println(N, " ")
		return
	}

	fmt.Println(N, " ")

	// First print decreasing order
	Oscillated(N - 5)

	fmt.Println(N, " ")
}

func main() {
	var N int
	fmt.Printf("Enter your number : ")
	fmt.Scanf("%d", &N)
	fmt.Println("Your value feedback: ")
	Oscillated(N)
}
