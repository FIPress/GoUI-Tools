package main

import (
	"github.com/fipress/GoUI"
	goui_tools "github.com/fipress/GoUI-ToolsLib"
	"github.com/fipress/GoUI/widgets/filepicker"
)

const createOK = "Create GoUI project succeeded."

func main() {
	goui.RegisterWidgets(new(filepicker.FilePicker))
	//register a service
	goui.Service("create/:name/:location", create)

	//create and open a window
	goui.Create(goui.Settings{Title: "GoUI Tools",
		Left:      200,
		Top:       50,
		Width:     400,
		Height:    510,
		Resizable: true,
		Debug:     true})
}

func create(ctx *goui.Context) {
	name := ctx.GetParam("name")
	location := ctx.GetParam("location")
	if name == "" || location == "" {
		ctx.Error("Project name or location not provided.")
		return
	}
	settings := &goui_tools.Settings{WorkingDir: location}
	ret := goui_tools.CreateProject(name, settings)

	//ret := name + settings.WorkingDir
	if ret == "" {
		logInfo(createOK)
		ctx.Ok()
	} else {
		logError(ret)
		ctx.Error(ret)
	}
}
