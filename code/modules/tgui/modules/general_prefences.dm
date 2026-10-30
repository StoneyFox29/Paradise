/datum/ui_module/general_prefences

/datum/ui_module/general_prefences/ui_interact(mob/user, datum/tgui/ui = null)
	ui = SStgui.try_update_ui(user, src, ui)
	if(!ui)
		ui = new(user, src, "GeneralPreferences", "Preference Toggles: ")
		ui.open()

/datum/ui_module/general_prefences/ui_static_data(mob/user)
	var/list/data = list()

	var/list/perfs_data = list()
	for(var/datum/preference_toggle/P in subtypesof(/datum/preference_toggle))
		perfs_data = list(list(
						"name" = P.name,
						"description" = P.description
		))
	data["perfs"] = perfs_data


