<!--start-code-->

```js
// import Sidenav from 'rsuite/Sidenav';
// import Nav from 'rsuite/Nav';

const styles = {
  width: 240,
  display: 'inline-table',
  marginRight: 10
};

const MySidenav = ({ appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) => {
  return (
    <div style={styles}>
      <Sidenav
        appearance={appearance}
        expanded={expanded}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <Sidenav.Body>
          <Nav {...navProps}>
            <Nav.Item eventKey="1" active icon={<Dashboard />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<Group />}>
              User Group
            </Nav.Item>
            <Nav.Menu eventKey="3" title="Advanced" icon={<Magic />}>
              <Nav.Item eventKey="3-1">Geo</Nav.Item>
              <Nav.Item eventKey="3-2">Devices</Nav.Item>
              <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
              <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Settings" icon={<GearCircle />}>
              <Nav.Item eventKey="4-1">Applications</Nav.Item>
              <Nav.Item eventKey="4-2">Channels</Nav.Item>
              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={onExpand} />
      </Sidenav>
    </div>
  );
};

const App = () => {
  const [activeKey, setActiveKey] = React.useState('1');
  const [openKeys, setOpenKeys] = React.useState(['3', '4']);
  const [expanded, setExpand] = React.useState(true);

  return (
    <div className="nav-wrapper">
      <MySidenav
        activeKey={activeKey}
        openKeys={openKeys}
        onSelect={setActiveKey}
        onOpenChange={setOpenKeys}
        expanded={expanded}
        onExpand={setExpand}
      />
      <MySidenav
        activeKey={activeKey}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
        onSelect={setActiveKey}
        expanded={expanded}
        onExpand={setExpand}
        appearance="inverse"
      />
      <MySidenav
        activeKey={activeKey}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
        onSelect={setActiveKey}
        expanded={expanded}
        onExpand={setExpand}
        appearance="subtle"
      />
    </div>
  );
};
ReactDOM.render(<App />);
```

<!--end-code-->
