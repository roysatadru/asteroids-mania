export interface Asteroid {
  id: String;
  name: String;
  shortName?: String;
  closeApproachDates: {
    prevDate: Date | null;
    nextDate: Date | null;
  };
}

export interface AsteroidFullDetails extends Asteroid {
  isPotentiallyHazardousAsteroid: boolean;
  estimatedDiameterInKms: {
    min: number;
    max: number;
  };
  absoluteMagnitudeH: number;
  nasaJplUrl: String;
}
