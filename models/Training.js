class Training {
    constructor(name, type, intensity) {
        this.setName(name);
        this.setType(type);
        this.setIntensity(intensity);
    }

    setName(name) {
        if (typeof name !== 'string' || name.trim() === '') {
            throw new Error('Invalid training name');
        }
        this.name = name;
    }

    setType(type) {
        const validTypes = ['kardio', 'siła', 'elastyczność', 'równowaga'];
        if (!validTypes.includes(type)) {
            throw new Error(`Invalid training type: ${type}. Valid types are: ${validTypes.join(', ')}`);
        }
        this.type = type;
    }

    setIntensity(intensity) {
        const validIntensities = ['niska', 'średnia', 'wysoka'];
        if (!validIntensities.includes(intensity)) {
            throw new Error(`Invalid training intensity: ${intensity}. Valid intensities are: ${validIntensities.join(', ')}`);
        }
        this.intensity = intensity;
    }
}

module.exports = Training;
