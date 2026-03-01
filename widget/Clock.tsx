import { createPoll } from "ags/time"
import { Gtk } from "ags/gtk4"
import GLib from "gi://GLib"
export default function Clock({ format = "%H:%M" }) {
  const time = createPoll("", 1000, () => {
    return GLib.DateTime.new_now_local().format(format) ?? "Invalid format";
  });

  return (
    <menubutton>
      <label label={time} />
      <popover>
        <Gtk.Calendar />
      </popover>
    </menubutton >
  )
}
