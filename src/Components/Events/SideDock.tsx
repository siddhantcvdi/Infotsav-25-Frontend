import { Dock, DockIcon } from "../magicui/dock"

const SideDock = () => {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <Dock orientation="vertical" direction="middle">
        <DockIcon className="rounded-full flex justify-center items-center">
          T
        </DockIcon>
        <DockIcon className="rounded-full flex justify-center items-center">
          M
        </DockIcon>
        <DockIcon className="rounded-full flex justify-center items-center">
          R
        </DockIcon>
        <DockIcon className="rounded-full flex justify-center items-center">
          C
        </DockIcon>
      </Dock>
    </div>
  )
}

export default SideDock