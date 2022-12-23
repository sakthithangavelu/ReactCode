//to profile a Navigation component and its descendants
render(
    <App>
        <Profiler id="Navigation" onRender={callback}>
            <Navigation {...props} />
        </Profiler>
        <Main {...props} />
    </App>
);


//Multiple Profiler components can be used to measure different parts of an application
render(
    <App>
        <Profiler id="Navigation" onRender={callback}>
            <Navigation {...props} />
        </Profiler>
        <Profiler id="Main" onRender={callback}>
            <Main {...props} />
        </Profiler>
    </App>
);