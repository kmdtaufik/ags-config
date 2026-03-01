import AstalHyprland from "gi://AstalHyprland"
import { createBinding, For } from "ags";

export default function Workspaces() {
  const hyprland = AstalHyprland.get_default();
  const workspaces = createBinding(hyprland, "workspaces");
  const focused = createBinding(hyprland, "focusedWorkspace");

  const sortedWorkspaces = workspaces.as((wss) =>
    wss.filter(ws)=> ws.id > 0).sort((a, b) => a.id - b.id)

  return (
    <box>
      <For each={sortedWorkspaces}>
        {(ws) => (
          <button></button>
        )}
      </For> </box>
  )
}
