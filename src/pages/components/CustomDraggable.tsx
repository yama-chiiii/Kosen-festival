// CustomDraggable.tsx
import React, { forwardRef, useRef } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

// カスタムResizableBoxのプロパティ定義
interface CustomResizableBoxProps extends Omit<ResizableBoxProps, 'children'> {
  children: React.ReactNode;
  width: number;
  height: number;
  lockAspectRatio?: boolean;
  onResizeStop?: ResizableBoxProps['onResizeStop'];
  onClick?: () => void; // onClickを追加
  tabIndex?: number;
  minConstraints?: [number, number]; // 最小サイズ制約
  maxConstraints?: [number, number]; // 最大サイズ制約
}

const CustomDraggable = forwardRef<HTMLDivElement, React.ComponentProps<typeof Draggable>>((props, ref) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const nodeRef = ref || innerRef;

  return (
    <Draggable nodeRef={nodeRef as React.RefObject<HTMLElement>} {...props}>
      <div ref={nodeRef}>{props.children}</div>
    </Draggable>
  );
});

CustomDraggable.displayName = 'CustomDraggable';

const CustomResizableBox = forwardRef<HTMLDivElement, CustomResizableBoxProps>(
  ({ children, width, height, lockAspectRatio, onResizeStop,　minConstraints, maxConstraints, ...props }, ref) => (
    <ResizableBox
    width={width}
    height={height}
    lockAspectRatio={lockAspectRatio}
    onResizeStop={onResizeStop}
    minConstraints={minConstraints} // 最小サイズ制約を適用
    maxConstraints={maxConstraints} // 最大サイズ制約を適用

      {...props}

    >
      <div ref={ref}>{children}</div>
    </ResizableBox>
  )
);

CustomResizableBox.displayName = 'CustomResizableBox';

export { CustomDraggable, CustomResizableBox };
