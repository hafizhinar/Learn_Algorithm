package main

import (
	"fmt"
	"math"
)

func main() {
	var Jumlah int
	var bonusTukar int
	var Total int

	fmt.Printf("Jumlah Bungkus Coklat yang ditukar : ")
	fmt.Scanf("%d", &Jumlah)
	Nilai := math.Floor(float64(Jumlah)) / 5
	fmt.Println(math.Floor(float64(Jumlah)) / 5)

	fmt.Println(Nilai)
	if Nilai > 5 {
		bonusTukar = int(Nilai) / 5
	} else {
		bonusTukar = 0
	}
	fmt.Println(bonusTukar)

	Total = Jumlah + int(Nilai) + int(bonusTukar)

	fmt.Println("Your value feedback: ")
	fmt.Println(Total)
}
