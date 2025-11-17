// Demo.tsx
import classes from './Demo.module.css';

function Demo({ collapsed }: { collapsed: boolean }) {
  return (
    <div
      className={classes.root}
      data-collapsed={collapsed || undefined}
    >
      <button type="button" className={classes.control}>
        Control
      </button>
    </div>
  );
}