package main

import (
	"github.com/fipress/GoUI"
	goui_tools "github.com/fipress/GoUI-ToolsLib"
	"github.com/fipress/GoUI/widgets/filepicker"
	"path/filepath"
)

const createOK = "Create GoUI project succeeded."

var log = new(logger)

func main() {
	goui.RegisterWidgets(new(filepicker.FilePicker))
	//register a service
	goui.Service("create/:name/:location", create)

	goui_tools.SetLogger(log)
	//create and open a window
	goui.Create(goui.Settings{Title: "GoUI Tools",
		Left:      200,
		Top:       50,
		Width:     600,
		Height:    300,
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
		log.Info(createOK)
		ctx.Ok()
	} else {
		log.Error(ret)
		ctx.Error(ret)
	}
	filepath.Join()
}
