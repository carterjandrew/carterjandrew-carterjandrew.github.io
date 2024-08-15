import{j as n}from"./index-DD_Jzo_l.js";function t(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"note-this-is-in-early-development",children:"Note: This is in early development!!"}),`
`,n.jsxs(e.p,{children:["KTile is a ",n.jsx(e.strong,{children:"kwin script"})," tiling manager made for ",n.jsx(e.a,{href:"https://kde.org/announcements/megarelease/6/",children:"KDE 6"})," replacing ",n.jsx(e.a,{href:"https://github.com/Bismuth-Forge/bismuth",children:"Bismuth"}),". Below is a copy of my notes thus far:"]}),`
`,n.jsx(e.h1,{id:"ideal-functionality",children:"Ideal Functionality:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"[ ] Has the same tiling functions as Bismuth"}),`
`,n.jsx(e.li,{children:"[ ] Allows users to highlight windows same as Bismuth"}),`
`,n.jsx(e.li,{children:"[ ] Has configuration of shortcuts, functionality, and appearance similar to Bismuth"}),`
`,n.jsx(e.li,{children:"[ ] Works fast as hell and anywhere KDE 6.0+"}),`
`,n.jsx(e.li,{children:"[x] Built without external libraries"}),`
`]}),`
`,n.jsx(e.h1,{id:"ideal-pseudo-code",children:"Ideal Pseudo-code"}),`
`,n.jsx(e.h2,{id:"philosophy",children:"Philosophy"}),`
`,n.jsx(e.p,{children:"We will imagine each window or 'application' as a item in a list. The tiling manager will use this list to rearrange and manage tiled windows."}),`
`,n.jsx(e.p,{children:"However we want items to retain their order in that list even if they move to a different window so when they return they do not get placed out of order."}),`
`,n.jsx(e.p,{children:"This is advantageous because it let's us spawn in windows every time into either the head or tail position and allows us to rearrange and jump windows with rules based on the current windows index."}),`
`,n.jsx(e.p,{children:"The application will create a object for each 'virtual desktop'. These object will be made up of the following components"}),`
`,n.jsx(e.p,{children:`| Name           | Function                                                                                     |
| -------------- | -------------------------------------------------------------------------------------------- |
| Tiling engine  | An imported engine that has functions to handle the tiling of a window given the live tiles. |
| Tiling windows | A list of window objects that we want to preform tiling on, in order                         |
| Spatial Shifts | A array of 'break' offsets that dictates offsets of all 'divisions' of screen space.         |`}),`
`,n.jsx(e.p,{children:"Spatial shifts explained via example:"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Imagine in your desktop you only have two windows: when tiled, those windows are placed side by side horizontally. The split in the middle between them is what is referenced by the first element in the spatial shift. So if we had a spatial shift of -10 then the left window would be 10 pixels smaller than the right."}),`
`]}),`
`,n.jsx(e.h1,{id:"research",children:"Research"}),`
`,n.jsx(e.p,{children:"Kwin scripts are cool. They work through hooks and triggers like many other UI systems. They can be written in js or a native qt language that may be worth looking into."}),`
`,n.jsx(e.h2,{id:"the-interactive-console",children:"The interactive console"}),`
`,n.jsxs(e.p,{children:["Plasma has an interactive console built to work on the development of building applications such as these. It is called ",n.jsx(e.code,{children:"plasma-interactiveconsole"})," and it allows you to write some code, compile it, and temporarily have it run on your desktop until logout."]}),`
`,n.jsx(e.p,{children:"We can start it for kwin with:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"code-highlight",children:n.jsx(e.span,{className:"code-line",children:`plasma-interactiveconsole --kwin
`})})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Console logs"}),`
KDE has a built in function called `,n.jsx(e.code,{children:"print"})," that lets you output values. But it does not output in the app and we actually need a journal to see outputs. We can access this with:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"code-highlight",children:n.jsx(e.span,{className:"code-line",children:`journalctl -f QT_CATEGORY=js QT_CATEGORY=kwin_scripting
`})})}),`
`,n.jsx(e.h2,{id:"the-workspace-object",children:"The workspace object"}),`
`,n.jsxs(e.p,{children:["Every piece of metadata we need on the current state is stored in the ",n.jsx(e.code,{children:"workspace"})," object."]}),`
`,n.jsxs(e.p,{children:["Most importantly we can use the ",n.jsx(e.code,{children:"windowList"})," function to fetch all current windows in the frame, ",n.jsx(e.code,{children:"currentDesktop"})," to fetch the current desktop object"]}),`
`,n.jsx(e.h3,{id:"object-components",children:"Object components"}),`
`,n.jsx(e.p,{children:"Here is a comprehensive list of the objects and it's attached object types:"}),`
`,n.jsx(e.h4,{id:"code-to-get-this-list",children:"Code to get this list:"}),`
`,n.jsx(e.pre,{children:n.jsxs(e.code,{className:"code-highlight",children:[n.jsx(e.span,{className:"code-line",children:`for(const p in workspace){
`}),n.jsx(e.span,{className:"code-line",children:"    print(`${p} | ${typeof workspace[p]}`)\n"}),n.jsx(e.span,{className:"code-line",children:`}
`})]})}),`
`,n.jsx(e.p,{children:`| Object Component               | Type     |
| ------------------------------ | -------- |
| objectName                     | string   |
| desktops                       | object   |
| currentDesktop                 | object   |
| activeWindow                   | object   |
| desktopGridSize                | object   |
| desktopGridWidth               | number   |
| desktopGridHeight              | number   |
| workspaceWidth                 | number   |
| workspaceHeight                | number   |
| workspaceSize                  | object   |
| activeScreen                   | object   |
| screens                        | object   |
| currentActivity                | string   |
| activities                     | object   |
| virtualScreenSize              | object   |
| virtualScreenGeometry          | object   |
| stackingOrder                  | object   |
| cursorPos                      | object   |
| objectNameChanged              | function |
| windowAdded                    | function |
| windowRemoved                  | function |
| windowActivated                | function |
| desktopsChanged                | function |
| desktopLayoutChanged           | function |
| screensChanged                 | function |
| currentActivityChanged         | function |
| activitiesChanged              | function |
| activityAdded                  | function |
| activityRemoved                | function |
| virtualScreenSizeChanged       | function |
| virtualScreenGeometryChanged   | function |
| currentDesktopChanged          | function |
| cursorPosChanged               | function |
| slotSwitchDesktopNext          | function |
| slotSwitchDesktopPrevious      | function |
| slotSwitchDesktopRight         | function |
| slotSwitchDesktopLeft          | function |
| slotSwitchDesktopUp            | function |
| slotSwitchDesktopDown          | function |
| slotSwitchToNextScreen         | function |
| slotSwitchToPrevScreen         | function |
| slotSwitchToRightScreen        | function |
| slotSwitchToLeftScreen         | function |
| slotSwitchToAboveScreen        | function |
| slotSwitchToBelowScreen        | function |
| slotWindowToNextScreen         | function |
| slotWindowToPrevScreen         | function |
| slotWindowToRightScreen        | function |
| slotWindowToLeftScreen         | function |
| slotWindowToAboveScreen        | function |
| slotWindowToBelowScreen        | function |
| slotToggleShowDesktop          | function |
| slotWindowMaximize             | function |
| slotWindowMaximizeVertical     | function |
| slotWindowMaximizeHorizontal   | function |
| slotWindowMinimize             | function |
| slotWindowShade                | function |
| slotWindowRaise                | function |
| slotWindowLower                | function |
| slotWindowRaiseOrLower         | function |
| slotActivateAttentionWindow    | function |
| slotWindowMoveLeft             | function |
| slotWindowMoveRight            | function |
| slotWindowMoveUp               | function |
| slotWindowMoveDown             | function |
| slotWindowExpandHorizontal     | function |
| slotWindowExpandVertical       | function |
| slotWindowShrinkHorizontal     | function |
| slotWindowShrinkVertical       | function |
| slotWindowQuickTileLeft        | function |
| slotWindowQuickTileRight       | function |
| slotWindowQuickTileTop         | function |
| slotWindowQuickTileBottom      | function |
| slotWindowQuickTileTopLeft     | function |
| slotWindowQuickTileTopRight    | function |
| slotWindowQuickTileBottomLeft  | function |
| slotWindowQuickTileBottomRight | function |
| slotSwitchWindowUp             | function |
| slotSwitchWindowDown           | function |
| slotSwitchWindowRight          | function |
| slotSwitchWindowLeft           | function |
| slotIncreaseWindowOpacity      | function |
| slotLowerWindowOpacity         | function |
| slotWindowOperations           | function |
| slotWindowClose                | function |
| slotWindowMove                 | function |
| slotWindowResize               | function |
| slotWindowAbove                | function |
| slotWindowBelow                | function |
| slotWindowOnAllDesktops        | function |
| slotWindowFullScreen           | function |
| slotWindowNoBorder             | function |
| slotWindowToNextDesktop        | function |
| slotWindowToPreviousDesktop    | function |
| slotWindowToDesktopRight       | function |
| slotWindowToDesktopLeft        | function |
| slotWindowToDesktopUp          | function |
| slotWindowToDesktopDown        | function |
| sendClientToScreen             | function |
| showOutline                    | function |
| hideOutline                    | function |
| screenAt                       | function |
| tilingForScreen                | function |
| clientArea                     | function |
| createDesktop                  | function |
| removeDesktop                  | function |
| supportInformation             | function |
| raiseWindow                    | function |
| getClient                      | function |
| windowAt                       | function |
| isEffectActive                 | function |
| windowList                     | function |`}),`
`,n.jsx(e.h2,{id:"the-window-toplevel-object",children:"The window toplevel object"}),`
`,n.jsxs(e.p,{children:["All the windows we end up getting access to are of type ",n.jsx(e.code,{children:"topLevel"})," and give us access to important things like geometry and type."]}),`
`,n.jsxs(e.p,{children:["Currently we cannot access any window ID so using this object to retrieve a ",n.jsx(e.code,{children:"abstract client"})," is impossible. I think the abstract client is a X11 feature anyways."]}),`
`,n.jsxs(e.p,{children:["Most of the components are read only but we can work specifically with the ",n.jsx(e.code,{children:"frameGeometry"})," object to manipulate the frame size. ",n.jsx(e.strong,{children:"This means we do not know the size of the border, I need to figure out how to include border dimensions somehow"})]}),`
`,n.jsx(e.h3,{id:"object-components-1",children:"Object components"}),`
`,n.jsx(e.h4,{id:"code-to-generate",children:"Code to generate"}),`
`,n.jsx(e.pre,{children:n.jsxs(e.code,{className:"code-highlight",children:[n.jsx(e.span,{className:"code-line",children:`const windows = workspace.windowList()
`}),n.jsx(e.span,{className:"code-line",children:`for(p in windows[0]){
`}),n.jsx(e.span,{className:"code-line",children:"    print(`${p}, ${typeof windows[0][p]}`)\n"}),n.jsx(e.span,{className:"code-line",children:`}
`})]})}),`
`,n.jsx(e.p,{children:`| Component Name                   | Type     | Is writeable |
| -------------------------------- | -------- | ------------ |
| objectName                       | string   | writeable    |
| bufferGeometry                   | object   | read-only    |
| clientGeometry                   | object   | read-only    |
| pos                              | object   | read-only    |
| size                             | object   | read-only    |
| x                                | number   | read-only    |
| y                                | number   | read-only    |
| width                            | number   | read-only    |
| height                           | number   | read-only    |
| opacity                          | number   | writeable    |
| output                           | object   | read-only    |
| rect                             | object   | read-only    |
| resourceName                     | string   | read-only    |
| resourceClass                    | string   | read-only    |
| windowRole                       | string   | read-only    |
| desktopWindow                    | boolean  | read-only    |
| dock                             | boolean  | read-only    |
| toolbar                          | boolean  | read-only    |
| menu                             | boolean  | read-only    |
| normalWindow                     | boolean  | read-only    |
| dialog                           | boolean  | read-only    |
| splash                           | boolean  | read-only    |
| utility                          | boolean  | read-only    |
| dropdownMenu                     | boolean  | read-only    |
| popupMenu                        | boolean  | read-only    |
| tooltip                          | boolean  | read-only    |
| notification                     | boolean  | read-only    |
| criticalNotification             | boolean  | read-only    |
| appletPopup                      | boolean  | read-only    |
| onScreenDisplay                  | boolean  | read-only    |
| comboBox                         | boolean  | read-only    |
| dndIcon                          | boolean  | read-only    |
| windowType                       | number   | read-only    |
| managed                          | boolean  | read-only    |
| deleted                          | boolean  | read-only    |
| skipsCloseAnimation              | boolean  | writeable    |
| popupWindow                      | boolean  | read-only    |
| outline                          | boolean  | read-only    |
| internalId                       | object   | read-only    |
| pid                              | number   | read-only    |
| stackingOrder                    | number   | read-only    |
| fullScreen                       | boolean  | writeable    |
| fullScreenable                   | boolean  | read-only    |
| active                           | boolean  | read-only    |
| desktops                         | object   | writeable    |
| onAllDesktops                    | boolean  | writeable    |
| activities                       | object   | writeable    |
| skipTaskbar                      | boolean  | writeable    |
| skipPager                        | boolean  | writeable    |
| skipSwitcher                     | boolean  | writeable    |
| closeable                        | boolean  | read-only    |
| icon                             | object   | read-only    |
| keepAbove                        | boolean  | writeable    |
| keepBelow                        | boolean  | writeable    |
| shadeable                        | boolean  | read-only    |
| shade                            | boolean  | writeable    |
| minimizable                      | boolean  | read-only    |
| minimized                        | boolean  | writeable    |
| iconGeometry                     | object   | read-only    |
| specialWindow                    | boolean  | read-only    |
| demandsAttention                 | boolean  | writeable    |
| caption                          | string   | read-only    |
| minSize                          | object   | read-only    |
| maxSize                          | object   | read-only    |
| wantsInput                       | boolean  | read-only    |
| transient                        | boolean  | read-only    |
| transientFor                     | object   | read-only    |
| modal                            | boolean  | read-only    |
| frameGeometry                    | object   | writeable    |
| move                             | boolean  | read-only    |
| resize                           | boolean  | read-only    |
| decorationHasAlpha               | boolean  | read-only    |
| noBorder                         | boolean  | writeable    |
| providesContextHelp              | boolean  | read-only    |
| maximizable                      | boolean  | read-only    |
| moveable                         | boolean  | read-only    |
| moveableAcrossScreens            | boolean  | read-only    |
| resizeable                       | boolean  | read-only    |
| desktopFileName                  | string   | read-only    |
| hasApplicationMenu               | boolean  | read-only    |
| applicationMenuActive            | boolean  | read-only    |
| unresponsive                     | boolean  | read-only    |
| colorScheme                      | string   | read-only    |
| layer                            | number   | read-only    |
| hidden                           | boolean  | read-only    |
| tile                             | object   | writeable    |
| inputMethod                      | boolean  | read-only    |
| objectNameChanged                | function | read-only    |
| stackingOrderChanged             | function | read-only    |
| shadeChanged                     | function | read-only    |
| opacityChanged                   | function | read-only    |
| damaged                          | function | read-only    |
| inputTransformationChanged       | function | read-only    |
| closed                           | function | read-only    |
| windowShown                      | function | read-only    |
| windowHidden                     | function | read-only    |
| outputChanged                    | function | read-only    |
| skipCloseAnimationChanged        | function | read-only    |
| windowRoleChanged                | function | read-only    |
| windowClassChanged               | function | read-only    |
| surfaceChanged                   | function | read-only    |
| shadowChanged                    | function | read-only    |
| bufferGeometryChanged            | function | read-only    |
| frameGeometryChanged             | function | read-only    |
| clientGeometryChanged            | function | read-only    |
| frameGeometryAboutToChange       | function | read-only    |
| visibleGeometryChanged           | function | read-only    |
| tileChanged                      | function | read-only    |
| fullScreenChanged                | function | read-only    |
| skipTaskbarChanged               | function | read-only    |
| skipPagerChanged                 | function | read-only    |
| skipSwitcherChanged              | function | read-only    |
| iconChanged                      | function | read-only    |
| activeChanged                    | function | read-only    |
| keepAboveChanged                 | function | read-only    |
| keepBelowChanged                 | function | read-only    |
| demandsAttentionChanged          | function | read-only    |
| desktopsChanged                  | function | read-only    |
| activitiesChanged                | function | read-only    |
| minimizedChanged                 | function | read-only    |
| paletteChanged                   | function | read-only    |
| colorSchemeChanged               | function | read-only    |
| captionChanged                   | function | read-only    |
| captionNormalChanged             | function | read-only    |
| maximizedAboutToChange           | function | read-only    |
| maximizedChanged                 | function | read-only    |
| transientChanged                 | function | read-only    |
| modalChanged                     | function | read-only    |
| quickTileModeChanged             | function | read-only    |
| moveResizedChanged               | function | read-only    |
| moveResizeCursorChanged          | function | read-only    |
| interactiveMoveResizeStarted     | function | read-only    |
| interactiveMoveResizeStepped     | function | read-only    |
| interactiveMoveResizeFinished    | function | read-only    |
| closeableChanged                 | function | read-only    |
| minimizeableChanged              | function | read-only    |
| shadeableChanged                 | function | read-only    |
| maximizeableChanged              | function | read-only    |
| desktopFileNameChanged           | function | read-only    |
| applicationMenuChanged           | function | read-only    |
| hasApplicationMenuChanged        | function | read-only    |
| applicationMenuActiveChanged     | function | read-only    |
| unresponsiveChanged              | function | read-only    |
| decorationChanged                | function | read-only    |
| hiddenChanged                    | function | read-only    |
| hiddenByShowDesktopChanged       | function | read-only    |
| lockScreenOverlayChanged         | function | read-only    |
| readyForPaintingChanged          | function | read-only    |
| maximizeGeometryRestoreChanged   | function | read-only    |
| fullscreenGeometryRestoreChanged | function | read-only    |
| closeWindow                      | function | read-only    |
| setReadyForPainting              | function | read-only    |
| setMaximize                      | function | read-only    |
| shapeChanged                     | function | read-only    |
| updateCaption                    | function | read-only    |`})]})}function a(o={}){const{wrapper:e}=o.components||{};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{a as default};
