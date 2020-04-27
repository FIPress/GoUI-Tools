package main

import "fmt"

type logger struct {
}

func (l logger) Info(format string, a ...interface{}) {
	fmt.Printf(format, a...)
}

func (l logger) Warning(format string, a ...interface{}) {
	fmt.Printf(format, a...)
}

func (l logger) Error(format string, a ...interface{}) {
	fmt.Printf(format, a...)
}
